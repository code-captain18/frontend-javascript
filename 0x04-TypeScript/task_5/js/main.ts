// Interface for Major Credits with brand property for unique identification
interface MajorCredits {
  credits: number;
  brand: "major";
}

// Interface for Minor Credits with brand property for unique identification
interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Function to sum major credits from two subjects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major"
  };
}

// Function to sum minor credits from two subjects
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor"
  };
}
