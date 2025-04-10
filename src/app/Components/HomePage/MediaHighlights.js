// File: components/MediaHighlights.js

export default function MediaHighlights({ highlights = [] }) {
    return (
      <div className="px-8 mt-12">
        <h3 className="text-xl font-semibold mb-4">Media Highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((highlight, i) => (
            <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
              <div className="aspect-video">
                <video src={highlight.videoUrl} controls className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-medium">{highlight.title}</p>
                <p className="text-sm text-gray-500">{highlight.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  