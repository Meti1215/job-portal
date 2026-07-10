"use client";

type Props = {
    search: string;
    setSearch: (value: string) => void;
};

export default function JobSearch({
    search,
    setSearch,
}: Props) {
    return (
        <input
            type="text"
            placeholder="Search jobs or companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
        />
    );
}