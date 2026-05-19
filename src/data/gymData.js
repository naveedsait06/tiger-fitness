import { Dumbbell, Shield, Zap, Target, Users, Trophy } from 'lucide-react';

export const navigationLinks = [
  { id: 'home', label: 'Home' },
  { id: 'programs', label: 'Programs' },
  { id: 'membership', label: 'Membership' },
  { id: 'testimonials', label: 'Community' },
];

export const coreFeatures = [
  {
    icon: Dumbbell,
    title: "Elite Iron Matrix",
    description: "Premium, custom-forged strength equipment engineered for biomechanical precision and maximum power output."
  },
  {
    icon: Zap,
    title: "High-Velocity Systems",
    description: "Dynamic athletic performance modules designed to optimize explosive speed, agility, and neurological conditioning."
  },
  {
    icon: Shield,
    title: "Biometric Architecture",
    description: "Integrated smart-tracking infrastructure assessing physiological recovery metrics and precise progression vectors."
  }
];

export const trainingPrograms = [
  {
    id: "power-hypertrophy",
    title: "Kinetic Strength",
    tag: "Hypertrophy & Power",
    intensity: "Advanced",
    features: ["Mechanical Tension Optimization", "Neuromuscular Adaptations", "Velocity-Based Trajectory Tracking"]
  },
  {
    id: "athletic-conditioning",
    title: "Metabolic Forge",
    tag: "High-Intensity Capacity",
    intensity: "Elite",
    features: ["Anaerobic Threshold Expansion", "Mitochondrial Density Biogenesis", "EPOC Maximization Matrix"]
  },
  {
    id: "olympic-weightlifting",
    title: "Olympic Precision",
    tag: "Technical Ballistics",
    intensity: "Mastery",
    features: ["Triple Extension Kinematics", "Barbell Velocity Analytics", "Proprioceptive Core Stability"]
  }
];

export const membershipTiers = [
  {
    name: "Iron Tier",
    price: "$49",
    period: "month",
    description: "Full access to the core training grounds and baseline biometric monitoring equipment.",
    perks: ["24/7 Facility Keycard Access", "Standard Free-Weight Matrix Access", "Digital Progressive Tracking App", "Locker Room & Recovery Lounge Access"],
    accent: false
  },
  {
    name: "Forge Elite",
    price: "$89",
    period: "month",
    description: "Advanced performance tier integrating professional metrics and specialized zones.",
    perks: ["Everything in Iron Tier", "Bi-Weekly Physiological Assessment", "Access to Olympic Ballistics Zone", "1-on-1 Biomechanical Form Audit", "Unlimited Metabolic Conditioning Classes"],
    accent: true
  },
  {
    name: "Kinetic Protocol",
    price: "$149",
    period: "month",
    description: "The complete human optimization framework designed for dedicated competitive athletes.",
    perks: ["Everything in Forge Elite", "Dedicated Strength & Conditioning Coach", "Daily Biometric Recovery Analytics", "Custom Personalized Nutrition Macro Engine", "Priority Hydrotherapy & Cryo-Recovery Booking"],
    accent: false
  }
];