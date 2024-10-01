export default function WRAPPER({ children }) {
    return (
        <div className="w-full h-100vh px-20">
            {children}
        </div>
    );
}