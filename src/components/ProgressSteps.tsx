import { CheckSquare, ChevronDown, Plus } from "lucide-react";
import { useState } from "react";


export default function ProgressSteps() {
    const [currentStep, setCurrentStep] = useState('Creation');

    const steps = [
        { id: 'Creation', name: 'Creation', icon: <Plus className="w-6 h-6" /> },
        { id: 'Project Concept Note', name: 'Project Concept Note', icon: <CheckSquare className="w-6 h-6" /> },
        { id: 'PDD Submission', name: 'PDD Submission', icon: <CheckSquare className="w-6 h-6" /> },
        { id: 'Authorization', name: 'Authorization', icon: <CheckSquare className="w-6 h-6" /> },
        { id: 'Project Monitoring', name: 'Project Monitoring', icon: <CheckSquare className="w-6 h-6" /> },
        { id: 'Credits Issued', name: 'Credits Issued', icon: <CheckSquare className="w-6 h-6" /> },
        // ... more steps
    ];

    const handleStepClick = (stepId: string) => {
        setCurrentStep(stepId);
        // You might also have logic here to navigate to a different view/form
    };
    return (
        <>
            <div className="overflow-hidden scrollable overflow-x-scroll w-100% bg-white shadow-md rounded-lg p-4">
                <div className="mt-5 top-1/3 ml-5 mr-10  left-0 right-0 h-0.5 border-t-2 border-dotted border-green-500 z-0 mb-5" ></div>
                <div className="flex items-center justify-between relative p-4 w-full">
                    <div className="absolute top-1/3 ml-5 mr-10  left-0 right-0 h-0.5 border-t-2 border-dotted border-green-500 z-0"></div>
                    {steps.map((step) => (
                        <>

                            <div
                                key={step.id}
                                className={`flex flex-col items-center cursor-pointer z-10 ${currentStep === step.id ? 'text-green-500' : 'text-gray-600'
                                    }`}
                                onClick={() => handleStepClick(step.id)}
                            >
                                {currentStep === step.id && <span className=" top-[-2rem] absolute  flex flex-col items-center  z-10"><span className="bg-[#DEFFC8] rounded-2xl p-1 text-[12px] text-gray-600">You’re Here</span><ChevronDown className="w-6 h-6 text-[#6fd42c]" /> </span>}
                                <div
                                    className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center ${currentStep === step.id ? 'border-[#6fd42c]' : 'border-gray-300'
                                        }`}
                                >
                                    {/* Replace with actual SVG icons */}
                                    <span className={`w-6 h-6 ${currentStep === step.id ? 'text-[#6fd42c]' : 'text-gray-400'}`}>
                                        {step.icon}
                                    </span>
                                </div>
                                <div className="mt-2 text-sm font-medium">
                                    {step.name}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className="mt-5 top-1/3 ml-5 mr-10  left-0 right-0 h-0.5 border-t-2 border-dotted border-green-500 z-0 mb-5" ></div>
            </div>
        </>
    );
}