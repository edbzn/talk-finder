import { Talk } from './talk.model';
import { Entity } from './abstract-entity';
import { Collection } from 'src/app/utils/collection';

export class TalkByChannel extends Entity {
  constructor(
    public channelId: string,
    public talk: Collection<Talk>,
  ) {
    super();
  }

  public addResources(nextTalkCollection: Collection<Talk>): this {
    this.talk.resources = this.talk.resources.concat(nextTalkCollection.resources);
    this.talk.nextPageToken = nextTalkCollection.nextPageToken;

    return this;
  }
}
