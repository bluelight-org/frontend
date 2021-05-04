/* eslint-disable */

export interface ResponseMetaData {
  status: number;
  timestamp: string;
}

// This function generates the meta part
// of every response. It is a mock response
export function generateMetaMock(): ResponseMetaData {
  return {
    status: 200,
    timestamp: new Date().toISOString()
  } as ResponseMetaData;
}
