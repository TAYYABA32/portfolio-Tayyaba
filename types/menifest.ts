export interface Identity {
    name: string;
    title: string;
    location: string;
    contact: {
      email: string;
      github: string;
      portfolio: string;
    };
  }
  
  export interface Stat {
    label: string;
    value: string;
  }
  
  export interface Experience {
    company: string;
    role: string;
    period: string;
    highlights: string[];
  }
  
  export interface Stack {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
  }
  
  export interface Manifest {
    identity: Identity;
    stats: Stat[];
    experience: Experience[];
    stack: Stack;
  }