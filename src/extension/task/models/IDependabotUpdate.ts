/**
 * To see the supported structure, visit
 *
 * https://docs.github.com/en/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-dependabotyml
 */
export interface IDependabotUpdate {
  /**
   * Location of package manifests.
   * */
  directory: string;
  /**
   * Package manager to use.
   * */
  packageEcosystem: string;
  schedule?: IDependabotUpdateSchedule;
  /**
   * Customize which updates are allowed.
   */
  allow?: string;
  /**
   * Ignore certain dependencies or versions.
   */
  ignore?: string;
  /**
   * Custom labels/tags.
   */
  labels?: string;
  /**
   * The milestone to associate pull requests with.
   */
  milestone?: string;
  /**
   * Separator for the branches created.
   */
  branchNameSeparator?: string;
  /**
   * 	Limit number of open pull requests for version updates.
   */
  openPullRequestLimit?: number;
  /**
   * Branch to create pull requests against.
   */
  targetBranch?: string;
  /**
   * Update vendored or cached dependencies
   */
  vendor?: boolean;
  /**
   * How to update manifest version requirements.
   */
  versioningStrategy?: string;
}

export interface IDependabotUpdateSchedule {
  /**
   * Time of day to check for updates (hh:mm)
   */
  time?: string;
  /**
   * Day of week to check for updates
   */
  day?: string;
  /**
   * Timezone for time of day (zone identifier)
   */
  timezone?: string;
  /**
   * 	How often to check for updates
   */
  interval: string;
}

export type DependabotDependencyType =
  | "direct"
  | "all"
  | "production"
  | "development";

export type DependabotPackageEcosystemType =
  | "bundler"
  | "cargo"
  | "composer"
  | "docker"
  | "hex"
  | "elm"
  | "gitsubmodules"
  | "github-actions"
  | "gomod"
  | "gradle"
  | "maven"
  | "mix"
  | "npm"
  | "nuget"
  | "pip"
  | "terraform";

export type DependabotVersioningStrategyType =
  | "lock-file-only"
  | "auto"
  | "widen"
  | "increase"
  | "increase-if-necessary";
