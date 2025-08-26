import { useStack } from '../context/StackContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

function Results() {
  const { state } = useStack();
  const navigate = useNavigate();

  const generateRecommendations = () => {
    const recommendations = {
      primary: [],
      reasoning: []
    };

    if (state.rtos === 'rtems') {
      recommendations.primary.push({
        name: 'RTEMS',
        description: 'NASA-proven space-grade RTOS with 18 processor architectures',
        benefits: ['Space heritage', 'SMP capabilities', 'ESA qualified versions', 'BSD licensing']
      });
    }

    if (state.flightSoftware === 'cfs') {
      recommendations.primary.push({
        name: 'NASA Core Flight System (cFS)',
        description: 'Most mature open-source flight software framework globally',
        benefits: ['40+ missions heritage', 'Dynamic application loading', '12 standard applications', 'cFS 2.0 coming 2025']
      });
    }

    if (state.simulation === 'rocketpy') {
      recommendations.primary.push({
        name: 'RocketPy',
        description: 'Next-generation simulation framework with SciPy ecosystem',
        benefits: ['1% accuracy', 'Meteorological data', 'Monte Carlo analysis', 'Production ready']
      });
    }

    if (state.budget === 'low') {
      recommendations.reasoning.push('Focus on open-source solutions to minimize licensing costs while maintaining quality.');
    }

    return recommendations;
  };

  const recommendations = generateRecommendations();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Selector</span>
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Software Stack Recommendation
        </h1>
        <p className="text-xl text-gray-600">
          Based on your selections, here's the optimal software stack for your project
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Selected Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(state).map(([key, value]) => (
            <div key={key} className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm font-medium text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="text-sm text-gray-900 mt-1">
                {value || 'Not specified'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {recommendations.primary.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recommended Technologies</h2>
          <div className="space-y-6">
            {recommendations.primary.map((rec, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{rec.name}</h3>
                <p className="text-gray-600 mb-3">{rec.description}</p>
                <div className="flex flex-wrap gap-2">
                  {rec.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
