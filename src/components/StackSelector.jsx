import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStack } from '../context/StackContext';
import { ArrowRight, Rocket, Shield, Cpu } from 'lucide-react';

function StackSelector() {
  const navigate = useNavigate();
  const { state, dispatch } = useStack();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Project Overview',
      icon: Rocket,
      fields: [
        {
          name: 'projectType',
          label: 'Project Type',
          type: 'select',
          options: [
            { value: 'hobby', label: 'Hobby/Educational' },
            { value: 'academic', label: 'Academic Research' },
            { value: 'commercial', label: 'Commercial Development' },
            { value: 'government', label: 'Government/NASA' }
          ]
        },
        {
          name: 'experience',
          label: 'Development Experience',
          type: 'select',
          options: [
            { value: 'beginner', label: 'Beginner' },
            { value: 'intermediate', label: 'Intermediate' },
            { value: 'advanced', label: 'Advanced' },
            { value: 'expert', label: 'Expert' }
          ]
        },
        {
          name: 'budget',
          label: 'Budget Range',
          type: 'select',
          options: [
            { value: 'low', label: 'Low (< $10K)' },
            { value: 'medium', label: 'Medium ($10K - $100K)' },
            { value: 'high', label: 'High ($100K - $1M)' },
            { value: 'enterprise', label: 'Enterprise (> $1M)' }
          ]
        },
        {
          name: 'timeline',
          label: 'Development Timeline',
          type: 'select',
          options: [
            { value: 'short', label: 'Short (3-6 months)' },
            { value: 'medium', label: 'Medium (6-18 months)' },
            { value: 'long', label: 'Long (18+ months)' }
          ]
        }
      ]
    },
    {
      title: 'Operating System & RTOS',
      icon: Cpu,
      fields: [
        {
          name: 'os',
          label: 'Primary Operating System',
          type: 'select',
          options: [
            { value: 'linux', label: 'Linux (Ubuntu/CentOS)' },
            { value: 'windows', label: 'Windows' },
            { value: 'macos', label: 'macOS' },
            { value: 'cross-platform', label: 'Cross-Platform' }
          ]
        },
        {
          name: 'rtos',
          label: 'Real-Time Operating System',
          type: 'select',
          options: [
            { value: 'rtems', label: 'RTEMS (NASA Proven)' },
            { value: 'freertos', label: 'FreeRTOS' },
            { value: 'vxworks', label: 'VxWorks (Commercial)' },
            { value: 'qnx', label: 'QNX' },
            { value: 'none', label: 'No RTOS Required' }
          ]
        }
      ]
    },
    {
      title: 'Flight Software & Simulation',
      icon: Rocket,
      fields: [
        {
          name: 'flightSoftware',
          label: 'Flight Software Framework',
          type: 'select',
          options: [
            { value: 'cfs', label: 'NASA Core Flight System (cFS)' },
            { value: 'fprime', label: 'NASA F Prime' },
            { value: 'custom', label: 'Custom Framework' },
            { value: 'none', label: 'No Flight Software Required' }
          ]
        },
        {
          name: 'simulation',
          label: 'Simulation Framework',
          type: 'select',
          options: [
            { value: 'rocketpy', label: 'RocketPy (Python)' },
            { value: 'mapleaf', label: 'MAPLEAF (6-DOF)' },
            { value: 'openrocket', label: 'OpenRocket' },
            { value: 'custom', label: 'Custom Simulation' },
            { value: 'none', label: 'No Simulation Required' }
          ]
        }
      ]
    },
    {
      title: 'Control Systems & Hardware',
      icon: Shield,
      fields: [
        {
          name: 'controlSystems',
          label: 'Control Systems Framework',
          type: 'select',
          options: [
            { value: 'ros2', label: 'ROS2 (Robot Operating System)' },
            { value: 'ardupilot', label: 'ArduPilot' },
            { value: 'px4', label: 'PX4' },
            { value: 'custom', label: 'Custom Control System' },
            { value: 'none', label: 'No Control System Required' }
          ]
        },
        {
          name: 'hardware',
          label: 'Hardware Abstraction',
          type: 'select',
          options: [
            { value: 'hal', label: 'Hardware Abstraction Layer (HAL)' },
            { value: 'ndas', label: 'NASA Data Acquisition System' },
            { value: 'custom', label: 'Custom Hardware Interface' },
            { value: 'none', label: 'No Hardware Interface Required' }
          ]
        }
      ]
    },
    {
      title: 'Safety & Deployment',
      icon: Shield,
      fields: [
        {
          name: 'safety',
          label: 'Safety Certification',
          type: 'select',
          options: [
            { value: 'do178c', label: 'DO-178C (Aerospace)' },
            { value: 'iso26262', label: 'ISO 26262 (Automotive)' },
            { value: 'iec61508', label: 'IEC 61508 (Industrial)' },
            { value: 'none', label: 'No Certification Required' }
          ]
        },
        {
          name: 'deployment',
          label: 'Deployment Platform',
          type: 'select',
          options: [
            { value: 'embedded', label: 'Embedded System' },
            { value: 'cloud', label: 'Cloud Platform' },
            { value: 'hybrid', label: 'Hybrid (Embedded + Cloud)' },
            { value: 'desktop', label: 'Desktop Application' }
          ]
        }
      ]
    }
  ];

  const handleFieldChange = (fieldName, value) => {
    dispatch({ type: `SET_${fieldName.toUpperCase()}`, payload: value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];
  const IconComponent = currentStepData.icon;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Software Stack Selector
        </h1>
        <p className="text-xl text-gray-600">
          Choose the optimal software stack for your aerospace project from OS to launch
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index <= currentStep 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-1 mx-2 ${
                  index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}: {currentStepData.title}
          </span>
        </div>
      </div>

      {/* Current Step Form */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <IconComponent className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">
            {currentStepData.title}
          </h2>
        </div>

        <div className="space-y-6">
          {currentStepData.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  value={state[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select an option...</option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  value={state[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-6 py-2 rounded-md font-medium ${
              currentStep === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 flex items-center space-x-2"
          >
            <span>
              {currentStep === steps.length - 1 ? 'View Results' : 'Next'}
            </span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StackSelector;
