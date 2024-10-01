export default function TR({ children }) {
    return (
        <tr className="border-b border-gray-600 hover:bg-gray-700 transition-colors">
            {children}
        </tr>
    );
}