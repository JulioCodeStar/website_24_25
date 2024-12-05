/* eslint-disable @next/next/no-img-element */
export function ImageDescription({ image, title, description }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 md:h-96">
          <img
            src={image}
            alt={title}
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    )
  }