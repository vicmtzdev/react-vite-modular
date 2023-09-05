import { usePresetsStore } from '../../hooks';
import { PresetsModal } from '../components';
import { PresetsLayout } from '../layout/PresetsLayout';
import { NothingSelectedView, PresetView } from '../views';

export const PresetsPage = () => {

  const { activePreset } = usePresetsStore();

  return (

    <PresetsLayout>

      {
        (activePreset === null) ? <NothingSelectedView /> : <PresetView activePreset={activePreset} />
      }

      <PresetsModal />

    </PresetsLayout>


  )
}
