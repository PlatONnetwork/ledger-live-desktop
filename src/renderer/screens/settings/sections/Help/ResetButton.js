// @flow

import React, { useCallback } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useGlobalSyncState } from "@ledgerhq/live-common/lib/bridge/react";
import { useCountervaluesPolling } from "@ledgerhq/live-common/lib/countervalues/react";
import logger from "~/logger";
import { useHardReset } from "~/renderer/reset";
import ConfirmModal from "~/renderer/modals/ConfirmModal";
import ResetFallbackModal from "~/renderer/modals/ResetFallbackModal";
import { SyncSkipUnderPriority } from "@ledgerhq/live-common/lib/bridge/react";
import Box from "~/renderer/components/Box";
import Button from "~/renderer/components/Button";
import IconTriangleWarning from "~/renderer/icons/TriangleWarning";
import type { ThemedComponent } from "~/renderer/styles/StyleProvider";
import { useActionModal } from "./logic";

let reset;

export default function ResetButton() {
  const { t } = useTranslation();
  const hardReset = useHardReset();
  const [
    { opened, pending, fallbackOpened },
    { open, close, closeFallback, handleConfirm, handleError },
  ] = useActionModal();

  const globalSyncState = useGlobalSyncState();
  const cvPolling = useCountervaluesPolling();
  const isPending = cvPolling.pending || globalSyncState.pending;

  reset = async () => {
    if (isPending) {
      return setTimeout(reset, 1000);
    }
    try {
      await hardReset();
      window.api.reloadRenderer();
    } catch (err) {
      logger.error(err);
      handleError();
    }
  };

  const onConfirm = useCallback(async () => {
    if (pending) return;
    handleConfirm();
    reset();
  }, [pending, handleConfirm]);

  return (
    <>
      <Button small danger onClick={open} event="HardResetIntent">
        {t("common.reset")}
      </Button>

      <ConfirmModal
        analyticsName="HardReset"
        isDanger
        centered
        isLoading={pending}
        isOpened={opened}
        onClose={close}
        onReject={close}
        onConfirm={onConfirm}
        confirmText={t("common.reset")}
        title={t("settings.hardResetModal.title")}
        desc={t("settings.hardResetModal.desc")}
        renderIcon={() => (
          // FIXME why not pass in directly the DOM 🤷🏻
          <IconWrapperCircle color="alertRed">
            <IconTriangleWarning width={23} height={21} />
          </IconWrapperCircle>
        )}
      >
        <SyncSkipUnderPriority priority={999} />
      </ConfirmModal>

      <ResetFallbackModal isOpened={fallbackOpened} onClose={closeFallback} />
    </>
  );
}

export const IconWrapperCircle: ThemedComponent<{ color?: string }> = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ea2e4919;
  align-items: center;
  justify-content: center;
`;
