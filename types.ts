import {
  TelegramClientOptions,
  ParsedUpdate,
  tl,
  Message,
  BusinessCallbackQuery,
  StoryUpdate,
  DeleteBusinessMessageUpdate,
  DeleteMessageUpdate,
  DeleteStoryUpdate,
  PollUpdate,
  UserStatusUpdate,
  UserTypingUpdate,
  PollVoteUpdate,
  BotStoppedUpdate,
  ChatMemberUpdate,
  BotReactionUpdate,
  HistoryReadUpdate,
  ChatJoinRequestUpdate,
  BotReactionCountUpdate,
  BotChatJoinRequestUpdate,
  CallbackQuery,
  ChosenInlineResult,
  InlineQuery,
  InlineCallbackQuery,
  PreCheckoutQuery,
  BusinessConnection,
  BusinessMessage,
  TelegramClient,
} from "@mtcute/node";

/**
 * Which lib provided session string that was passed. `Mtcute` as default.
 */
export type SessionType =
  | "TelethonV1"
  | "Pyrogram"
  | "GramJS"
  | "MTKruto"
  | "Mtcute";

/**
 * Srbt constructor options.
 */
export type SrbtOptions = TelegramClientOptions & {
  /**
   * Which lib provided session string that was passed. `Mtcute` as default.
   */
  sessionType?: SessionType;
  /**
   * Telegram session string.
   */
  sessionString?: string;
  /**
   * Print Mtcute session string or not. False as default.
   */
  getSession?: boolean;
};

export type SrbtModuleOptions = {
  name: string;
  author?: string;
  version?: string;
  github?: string;
  description?: string;
};

export type TypeUpdateOrTypeMessage = tl.TypeUpdate | tl.TypeMessage;

export type SrbtTriggerOptions = {
  trigger: string;
  updateType: UpdateTypes;
};

export enum UpdateTypes {
  RAW_UPDATE = "raw_update",
  UPDATE = "update",
  NEW_MESSAGE = "new_message",
  EDIT_MESSAGE = "edit_message",
  MESSAGE_GROUP = "message_group",
  DELETE_MESSAGE = "delete_message",
  CHAT_MEMBER = "chat_member",
  INLINE_QUERY = "inline_query",
  CHOSEN_INLINE_RESULT = "chosen_inline_result",
  CALLBACK_QUERY = "callback_query",
  INLINE_CALLBACK_QUERY = "inline_callback_query",
  BUSINESS_CALLBACK_QUERY = "business_callback_query",
  POLL = "poll",
  POLL_VOTE = "poll_vote",
  USER_STATUS = "user_status",
  USER_TYPING = "user_typing",
  HISTORY_READ = "history_read",
  BOT_STOPPED = "bot_stopped",
  BOT_CHAT_JOIN_REQUEST = "bot_chat_join_request",
  CHAT_JOIN_REQUEST = "chat_join_request",
  PRE_CHECKOUT_QUERY = "pre_checkout_query",
  STORY = "story",
  DELETE_STORY = "delete_story",
  BOT_REACTION = "bot_reaction",
  BOT_REACTION_COUNT = "bot_reaction_count",
  BUSINESS_CONNECTION = "business_connection",
  NEW_BUSINESS_MESSAGE = "new_business_message",
  EDIT_BUSINESS_MESSAGE = "edit_business_message",
  BUSINESS_MESSAGE_GROUP = "business_message_group",
  DELETE_BUSINESS_MESSAGE = "delete_business_message",
}

export type UpdateType =
  | TypeUpdateOrTypeMessage
  | ParsedUpdate
  | Message
  | Message[]
  | DeleteMessageUpdate
  | ChatMemberUpdate
  | InlineQuery
  | ChosenInlineResult
  | CallbackQuery
  | InlineCallbackQuery
  | BusinessCallbackQuery
  | PollUpdate
  | PollVoteUpdate
  | UserStatusUpdate
  | UserTypingUpdate
  | HistoryReadUpdate
  | BotStoppedUpdate
  | BotChatJoinRequestUpdate
  | ChatJoinRequestUpdate
  | PreCheckoutQuery
  | StoryUpdate
  | DeleteStoryUpdate
  | BotReactionUpdate
  | BotReactionCountUpdate
  | BusinessConnection
  | BusinessMessage
  | BusinessMessage[]
  | DeleteBusinessMessageUpdate;
