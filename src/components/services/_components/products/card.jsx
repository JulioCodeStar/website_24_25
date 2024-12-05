export function CardInfo({ title, description, onClick, isActive }) {
    return (
      <div 
        className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-colors duration-300 ${isActive ? 'border-2 border-blue-500' : 'hover:bg-gray-50'}`}
        onClick={onClick}
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }
  