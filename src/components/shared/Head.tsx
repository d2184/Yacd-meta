import * as React from 'react';

import { connect } from '~/components/StateProvider';
import { getClashAPIConfig, getClashAPIConfigs } from '~/store/app';

const mapState = (s) => ({
  apiConfig: getClashAPIConfig(s),
  apiConfigs: getClashAPIConfigs(s),
});

function HeadImpl() {
  React.useEffect(() => {
    let title = 'yacd';
    document.title = title;
  });

  return <></>;
}

export const Head = connect(mapState)(HeadImpl);
