export type ExtensionProperties = {
  wrapLogMessage: boolean;
  logMessagePrefix: string;
  logMessageSuffix: string;
  addSemicolonInTheEnd: boolean;
  insertEnclosingClass: boolean;
  logCorrectionNotificationEnabled: boolean;
  insertEnclosingFunction: boolean;
  insertEmptyLineBeforeLogMessage: boolean;
  insertEmptyLineAfterLogMessage: boolean;
  delimiterInsideMessage: string;
  useTemplate: boolean;
  messageTemplate: string;
  includeFilename: boolean;
  includeLineNum: boolean;
  quote: string;
  logFunction: string;
};
