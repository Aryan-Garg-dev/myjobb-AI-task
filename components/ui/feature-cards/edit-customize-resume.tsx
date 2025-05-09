import {
  LayoutDashboardIcon,
  PencilIcon,
  SparklesIcon,
  FileTextIcon,
} from "lucide-react";

const EditCustomizeResume = () => {
  return (
    <div className="w-full h-40 p-3 border border-gray-200 bg-gray-50 shadow-sm flex flex-col gap-3 text-sm">
      <div className="flex items-center gap-2">
        <FileTextIcon className="text-blue-600" size={18} />
        <span className="font-medium text-gray-800">Your Resume</span>
      </div>

      <div className="space-y-1 text-gray-600">
        <div className="flex items-center gap-2">
          <PencilIcon className="text-green-600" size={14} />
          <span>Edit bullet points</span>
        </div>
        <div className="flex items-center gap-2">
          <LayoutDashboardIcon className="text-purple-600" size={14} />
          <span>Reorder sections</span>
        </div>
        <div className="flex items-center gap-2">
          <SparklesIcon className="text-pink-600" size={14} />
          <span>Highlight keywords</span>
        </div>
      </div>

      <div className="text-[11px] text-gray-400 mt-1">
        💡 Tip: Click any section to start customizing!
      </div>
    </div>
  );
};

export default EditCustomizeResume;
