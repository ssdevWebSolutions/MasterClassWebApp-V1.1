import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Videos from './Videos';
import Photos from './Photos';
import "../../../assets/css/media.css"

const Media= () => {
  return (
    <div className="media-archive-container">
      <h1 className="media-title">Media Archive</h1>
      <Tabs.Root className="tabs-root" defaultValue="videos">
        <Tabs.List className="tabs-list">
          <Tabs.Trigger className="tab-trigger" value="videos">Videos</Tabs.Trigger>
          <Tabs.Trigger className="tab-trigger" value="photos">Photos</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="tab-content" value="videos">
          <Videos />
        </Tabs.Content>
        <Tabs.Content className="tab-content" value="photos">
          <Photos />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Media;
