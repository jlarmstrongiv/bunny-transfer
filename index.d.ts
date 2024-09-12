export type EmptyParameters = {
  accessKeys: string[];
  locations: string[];
};

export function empty(emptyParameters: EmptyParameters): Promise<void>;

export type MoveParameters = {
  accessKeys: string[];
  locations: string[];
  index?: boolean;
};

export function move(moveParameters: MoveParameters): Promise<void>;

export type PurgeParameters = {
  accessKeys: string[];
  locations: string[];
};

export function purge(purgeParameters: PurgeParameters): Promise<void>;

export type SyncParameters = {
  accessKeys: string[];
  locations: string[];
};

export function sync(syncParameters: SyncParameters): Promise<void>;
