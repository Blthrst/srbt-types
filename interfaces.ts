import { PeersIndex, Message, TelegramClient } from "@mtcute/node";

import { UpdateTypes, TypeUpdateOrTypeMessage, UpdateType } from "./types";

export interface ISrbtModule {
  name: string;
  author: string;
  version: string;
  github: string;
  description: string;

  getTriggers: () => ISrbtTrigger[];
  bind: (triggerClass: ISrbtTrigger[]) => ISrbtModule;
  disband: () => ISrbtModule;
  findTrigger: (triggerClass: ISrbtTrigger) => ISrbtTrigger | undefined;
}

export interface ISrbtTrigger {
  getTrigger: () => string;
  getUpdateType: () => UpdateTypes;

  action(tg: TelegramClient, upd: UpdateType): Promise<void>;
}
