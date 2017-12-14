import { DateTime, Duration, Info, Interval, Settings, Zone } from 'luxon';
import { deprecate } from '@ember/application/deprecations';

deprecate('The name of the import has been shortened from ember-luxon/luxon to just luxon. The old import will be removed in the next major version.', false, { id: 'ember-luxon/luxon-import', until: '2.0.0' });

export { DateTime, Duration, Info, Interval, Settings, Zone };
