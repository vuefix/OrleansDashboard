export interface Stat {
  periodKey: Date;
  period: Date;
  siloAddress?: any;
  grain?: any;
  method?: any;
  count: number;
  exceptionCount: number;
  elapsedTime: number;
}

export interface ClusterStats {
  [key: string]: Stat
}