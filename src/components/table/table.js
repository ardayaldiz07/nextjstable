export default function TABLE({ children }) {
    return (
        <table className="w-full overflow-x-auto bg-gray-900 h-20vh rounded-lg shadow-lg">
            {children}
        </table>
    );
}