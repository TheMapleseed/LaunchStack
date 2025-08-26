import { createContext, useContext, useReducer } from 'react';

const StackContext = createContext();

const initialState = {
  os: '',
  rtos: '',
  flightSoftware: '',
  simulation: '',
  controlSystems: '',
  hardware: '',
  safety: '',
  deployment: '',
  projectType: '',
  experience: '',
  budget: '',
  timeline: ''
};

function stackReducer(state, action) {
  switch (action.type) {
    case 'SET_OS':
      return { ...state, os: action.payload };
    case 'SET_RTOS':
      return { ...state, rtos: action.payload };
    case 'SET_FLIGHT_SOFTWARE':
      return { ...state, flightSoftware: action.payload };
    case 'SET_SIMULATION':
      return { ...state, simulation: action.payload };
    case 'SET_CONTROL_SYSTEMS':
      return { ...state, controlSystems: action.payload };
    case 'SET_HARDWARE':
      return { ...state, hardware: action.payload };
    case 'SET_SAFETY':
      return { ...state, safety: action.payload };
    case 'SET_DEPLOYMENT':
      return { ...state, deployment: action.payload };
    case 'SET_PROJECT_TYPE':
      return { ...state, projectType: action.payload };
    case 'SET_EXPERIENCE':
      return { ...state, experience: action.payload };
    case 'SET_BUDGET':
      return { ...state, budget: action.payload };
    case 'SET_TIMELINE':
      return { ...state, timeline: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function StackProvider({ children }) {
  const [state, dispatch] = useReducer(stackReducer, initialState);
  
  return (
    <StackContext.Provider value={{ state, dispatch }}>
      {children}
    </StackContext.Provider>
  );
}

export function useStack() {
  const context = useContext(StackContext);
  if (!context) {
    throw new Error('useStack must be used within a StackProvider');
  }
  return context;
}
