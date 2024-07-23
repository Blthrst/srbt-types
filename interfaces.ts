import { PeersIndex, Message, TelegramClient } from "@mtcute/node";

import {
  UpdateTypes,
  TypeUpdateOrTypeMessage,
  UpdateType,
} from "./types";

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

  // action(...args: any): Promise<void>;

  // action(
  //   trigger: TriggerTypes.RAW_UPDATE,
  //   upd: tl.TypeUpdate | tl.TypeMessage,
  //   peers: PeersIndex,
  // ): Promise<void>;

  action(tg: TelegramClient, upd: UpdateType): Promise<void>;

  // action(upd: Message, trigger: TriggerTypes.NEW_MESSAGE): Promise<void>;

  // action(upd: Message, trigger: TriggerTypes.EDIT_MESSAGE): Promise<void>;
}
