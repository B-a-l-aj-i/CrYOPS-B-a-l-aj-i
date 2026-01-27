export interface SanitizedRepo {
  author: string;
  name: string;
  description: string;
  language: string | null | "";
  languageColor: string;
  stars: number;
  forks: number;
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  activityDuration: string;
}

export interface PeriodMetrics {
  recentContributions: number;
  averageDailyCommits: number;
  weekendPercentage: number;
  mostActiveDay: string | null;
  weekdayWeekendBreakdown: { weekday: number; weekend: number };
  bestCommit: { date: string; count: number } | null;
}

export interface ContributionDetails {
  total: number;
  currentYear: number;
  currentStreak: number;
  longestStreak: number;
  activeYears: string[];
  yearOverYearChangePercentage: number | null;
  quarterOverQuarterChangePercentage: number | null;
  halfOverHalfChangePercentage: number | null;
  firstCommitDate: string | null;
  codingYears: string | null;
  pullRequests: { total: number; closed: number };
  issues: { total: number; closed: number };
  last6Months: PeriodMetrics;
  last1Year: PeriodMetrics;
  overall: PeriodMetrics;
}

export interface GitHubProfile {
  username: string;
  name: string;
  bio: string;
  avatar: string;
  profileUrl: string;
  location: string;
  company: string;
  blog: string;
  twitter: string;
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  createdAt: string;
}

export interface LanguageDistribution {
  language: string;
  percentage: number;
  color: string;
}

export interface GitHubData {
  profile: GitHubProfile;
  profileUrl: string;
  contributions: ContributionDetails;
  sanitizedReposData: SanitizedRepo[];
  languageDistribution: LanguageDistribution[];
  totalStars: number;
  bestRepo: SanitizedRepo | null;
  mostActiveRepoThisMonth: SanitizedRepo | null;
  activelyMaintainedRepos: SanitizedRepo[];
  topActivelyUsedRepos: SanitizedRepo[];
}
