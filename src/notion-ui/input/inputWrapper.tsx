import { useState, useRef, useEffect, useCallback } from "react";
import { ListFilter } from "lucide-react";
import Input, { InputProps } from "./input";
import axios from "axios";

export interface FilterOption {
  label: string;
  value: string;
}

interface InputWrapperProps extends InputProps {
  filterOptions?: FilterOption[];
  onFilterSelect?: (value: string) => void;
  debounceMs?: number;
  endContent?: React.ReactNode;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  filterOptions = [],
  onFilterSelect,
  endContent,
  debounceMs = 300,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [searchResults, setSearchResults] = useState<FilterOption[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isFilterEnabled = filterOptions.length > 0;

  // -------------------- Debounce --------------------
  useEffect(() => {
    const timeout = setTimeout(
      () => setDebouncedValue(searchValue),
      debounceMs
    );
    return () => clearTimeout(timeout);
  }, [searchValue, debounceMs]);

  // -------------------- API Search --------------------
  const fetchSearch = useCallback(async () => {
    if (!debouncedValue.trim()) {
      setSearchResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const formatted = res.data
        .filter((user: any) =>
          user.name.toLowerCase().includes(debouncedValue.toLowerCase())
        )
        .map((user: any) => ({ label: user.name, value: user.id }));

      setSearchResults(formatted);
      setOpen(true);
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setTimeout(() => setLoading(false), 300);
    }
  }, [debouncedValue]);

  useEffect(() => {
    fetchSearch();
  }, [fetchSearch]);

  // -------------------- Close on outside click --------------------
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const finalList = searchValue.trim() ? searchResults : filterOptions;

  return (
    <div className="relative w-full" ref={containerRef}>
      <Input
        {...rest}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setOpen(true);
        }}
        endContent={
          loading ? (
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="animate-spin w-4 h-4 border-2 border-primary/30 border-t-tertiary/95 rounded-full"></div>
            </div>
          ) : isFilterEnabled ? (
            <span
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer flex items-center">
              <ListFilter size={18} />
            </span>
          ) : (
            endContent
          )
        }
      />

      {open && finalList.length > 0 && (
        <div className="absolute right-0 mt-1 w-full bg-white dark:bg-primary/20 shadow-lg border border-primary/25 rounded-md z-50 overflow-hidden">
          {finalList.map((item) => (
            <div
              key={item.value}
              className="px-3 py-2 hover:bg-primary/20 dark:hover:bg-primary/30 cursor-pointer text-sm"
              onClick={() => {
                setSearchValue(item.label);
                onFilterSelect?.(item.value);
                setOpen(false);
              }}>
              {item.label}
            </div>
          ))}
        </div>
      )}

      {open && finalList.length === 0 && (
        <div className="absolute right-0 mt-1 w-full bg-white dark:bg-primary/20 shadow-lg border border-primary/25 rounded-md z-50 px-3 py-2 text-primary/20 text-sm select-none">
          No results found
        </div>
      )}
    </div>
  );
};
