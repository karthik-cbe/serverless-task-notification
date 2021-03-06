// TODO none is not defined on the server
export type NotificationType = 'email' | 'sms' | 'both' | 'none'

export interface Task {
  contactID: string
  id: string
  type: NotificationType
  body: string
  complete?: boolean
}

export interface CreateTaskPayload {
  contactID: string | null
  type: NotificationType
  body: string
  clientID: string
}

export enum TaskStatus {
  Committed,
  Pending,
}
