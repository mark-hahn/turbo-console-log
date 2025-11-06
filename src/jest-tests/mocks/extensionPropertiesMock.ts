import { ExtensionProperties } from '../../entities';

export const extensionPropertiesMock: ExtensionProperties = {
  wrapLogMessage: false,
  logMessagePrefix: '🚀',
  logMessageSuffix: ':',
  addSemicolonInTheEnd: false,
  insertEnclosingClass: true,
  logCorrectionNotificationEnabled: false,
  insertEnclosingFunction: true,
  insertEmptyLineBeforeLogMessage: false,
  insertEmptyLineAfterLogMessage: false,
  quote: '"',
  delimiterInsideMessage: '~',
  // useTemplate: false,
  // messageTemplate: '🚀 ~ <file>:<line-num> ~ <class> ~ <func> ~ <var>:',
  includeLineNum: false,
  includeFilename: false,
  logFunction: 'log',
};
