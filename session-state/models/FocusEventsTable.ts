import { Database as SqliteDatabase } from 'better-sqlite3';
import { IFocusEvent } from '@secret-agent/injected-scripts/interfaces/IFocusEvent';
import BaseTable from '../lib/BaseTable';

export default class FocusEventsTable extends BaseTable<IFocusRecord> {
  constructor(readonly db: SqliteDatabase) {
    super(db, 'FocusEvents', [
      ['event', 'INTEGER'],
      ['commandId', 'INTEGER'],
      ['targetNodeId', 'INTEGER'],
      ['relatedTargetNodeId', 'INTEGER'],
      ['timestamp', 'TEXT'],
    ]);
  }

  public insert(focusEvent: IFocusEvent) {
    const [commandId, type, targetNodeId, relatedTargetNodeId, timestamp] = focusEvent;
    const record = [
      type === 'in' ? FocusEventType.IN : FocusEventType.OUT,
      commandId,
      targetNodeId,
      relatedTargetNodeId,
      timestamp,
    ];
    this.queuePendingInsert(record);
  }
}

export interface IFocusRecord {
  event: FocusEventType;
  commandId: number;
  targetNodeId?: number;
  relatedTargetNodeId?: number;
  timestamp: string;
}

export enum FocusEventType {
  IN = 0,
  OUT = 1,
}
