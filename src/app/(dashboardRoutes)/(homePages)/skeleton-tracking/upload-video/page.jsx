import { FiUpload, FiVideo, FiFileText, FiMaximize2, FiMonitor, FiClock, FiCamera, FiSun, FiImage, FiTag, FiSettings } from 'react-icons/fi';

export default function UploadVideo() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 space-x-1 mb-2">
        <span>Dashboard</span>
        <span>{'>'}</span>
        <span>Skeleton Tracking</span>
        <span>{'>'}</span>
        <span className="text-black font-medium">Upload Video</span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl font-semibold">Upload Video for Analysis</h1>

      {/* Upload Options */}
      <div className="bg-red-50 p-4 rounded-md flex items-start space-x-3">
        <div className="bg-white p-2 rounded-full shadow text-red-500">
          <FiUpload size={24} />
        </div>
        <div>
          <h2 className="font-semibold text-lg">Upload Options</h2>
          <p className="text-sm text-gray-600">Select a video from your device or record a new one</p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-[250px] md:h-[320px] rounded-xl overflow-hidden">
        <img 
          src="https://imgs.search.brave.com/jgNwCKz8lwgk_FNVdvS91JB9YhNtzcTgw_83n4ApmHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjA5/ODM1OTIxNS9waG90/by9kaWdpdGFsLW1h/cmtldGluZy1jb25j/ZXB0LWJ1c2luZXNz/bWFuLXVzaW5nLWxh/cHRvcC13aXRoLWFk/cy1kYXNoYm9hcmQt/ZGlnaXRhbC1tYXJr/ZXRpbmcuanBnP2I9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz1y/Nm1MZzdvLTI0OXZm/MW9CTFdkaGxFNUtv/NUFOOW1aaFJ4bC1I/SzhhblU0PQ" 
          alt="Upload Illustration" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Upload Methods */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Upload Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-md space-y-2">
            <div className="bg-white p-2 rounded-full shadow text-red-500 inline-block">
              <FiFileText size={24} />
            </div>
            <h3 className="font-semibold">From Device</h3>
            <p className="text-sm text-gray-600">Upload video files from your computer or mobile device</p>
            <button className="mt-2 px-4 py-1 bg-red-500 text-white rounded">Browse Files</button>
          </div>
          <div className="bg-red-50 p-4 rounded-md space-y-2">
            <div className="bg-white p-2 rounded-full shadow text-red-500 inline-block">
              <FiVideo size={24} />
            </div>
            <h3 className="font-semibold">Record Now</h3>
            <p className="text-sm text-gray-600">Use your camera to record a new video for analysis</p>
            <button className="mt-2 px-4 py-1 bg-red-500 text-white rounded">Start Recording</button>
          </div>
        </div>
      </div>

      {/* Video Requirements */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Video Requirements</h2>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <FiFileText className="text-red-500" size={20} />
            <p><strong>File Format:</strong> MP4, MOV, or AVI formats accepted</p>
          </div>
          <div className="flex items-start space-x-3">
            <FiMaximize2 className="text-red-500" size={20} />
            <p><strong>Maximum Size:</strong> Up to 500MB per video file</p>
          </div>
          <div className="flex items-start space-x-3">
            <FiMonitor className="text-red-500" size={20} />
            <p><strong>Resolution:</strong> Minimum 720p (1280x720) recommended</p>
          </div>
          <div className="flex items-start space-x-3">
            <FiClock className="text-red-500" size={20} />
            <p><strong>Duration:</strong> Maximum 3 minutes per video</p>
          </div>
        </div>
      </div>

      {/* Recording Tips */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Recording Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 p-4 rounded-md">
            <div className="bg-white p-2 rounded-full shadow text-red-500 inline-block">
              <FiCamera size={24} />
            </div>
            <h3 className="font-semibold">Camera Position</h3>
            <p className="text-sm text-gray-600">Place camera at 90° angle to the player's movement path</p>
          </div>
          <div className="bg-red-50 p-4 rounded-md">
            <div className="bg-white p-2 rounded-full shadow text-red-500 inline-block">
              <FiSun size={24} />
            </div>
            <h3 className="font-semibold">Lighting</h3>
            <p className="text-sm text-gray-600">Ensure good lighting with minimal shadows</p>
          </div>
          <div className="bg-red-50 p-4 rounded-md">
            <div className="bg-white p-2 rounded-full shadow text-red-500 inline-block">
              <FiImage size={24} />
            </div>
            <h3 className="font-semibold">Background</h3>
            <p className="text-sm text-gray-600">Use a plain, contrasting background for better tracking</p>
          </div>
        </div>
      </div>

      {/* Analysis Templates */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Analysis Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 p-4 rounded-md">
            <div className="bg-white p-2 rounded-full shadow text-red-500 inline-block">
              <FiTag size={24} />
            </div>
            <h3 className="font-semibold">Batting Technique</h3>
            <p className="text-sm text-gray-600">Analyze stance, backswing, and follow-through</p>
            <button className="mt-2 px-4 py-1 bg-red-500 text-white rounded">Select</button>
          </div>
          <div className="bg-red-50 p-4 rounded-md">
            <div className="bg-white p-2 rounded-full shadow text-red-500 inline-block">
              <FiTag size={24} />
            </div>
            <h3 className="font-semibold">Bowling Action</h3>
            <p className="text-sm text-gray-600">Analyze run-up, delivery stride, and release</p>
            <button className="mt-2 px-4 py-1 bg-red-500 text-white rounded">Select</button>
          </div>
          <div className="bg-red-50 p-4 rounded-md">
            <div className="bg-white p-2 rounded-full shadow text-red-500 inline-block">
              <FiSettings size={24} />
            </div>
            <h3 className="font-semibold">Custom Analysis</h3>
            <p className="text-sm text-gray-600">Create your own custom analysis parameters</p>
            <button className="mt-2 px-4 py-1 bg-red-500 text-white rounded">Create</button>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
        <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md w-full md:w-auto">Cancel</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md w-full md:w-auto">Continue to Analysis</button>
      </div>
    </div>
  );
}
