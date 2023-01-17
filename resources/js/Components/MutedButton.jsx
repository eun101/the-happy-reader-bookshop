export default function MutedButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `bg-yellow hover:bg-gray-100 text-black-800 font-semibold py-2 w-22 border border-yellow-400 rounded text-sm px-5 py-2.5 mb-2 bg-yellow-400 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
