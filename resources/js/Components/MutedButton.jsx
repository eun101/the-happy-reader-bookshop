export default function MutedButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 col-sm-12 border border-gray-400 rounded ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
