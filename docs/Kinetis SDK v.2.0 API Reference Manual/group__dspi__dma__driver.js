var group__dspi__dma__driver =
[
    [ "dspi_master_dma_handle_t", "group__dspi__dma__driver.html#struct__dspi__master__dma__handle", [
      [ "bitsPerFrame", "group__dspi__dma__driver.html#aa42e45029e3f6c2ae9d630f708bd95b6", null ],
      [ "command", "group__dspi__dma__driver.html#a99362405995258e9c62b1fbe12ae289b", null ],
      [ "lastCommand", "group__dspi__dma__driver.html#a8432d0950c952added32554a881b387c", null ],
      [ "fifoSize", "group__dspi__dma__driver.html#a00ad4c9aa940f1c03367c2532357d0cf", null ],
      [ "isPcsActiveAfterTransfer", "group__dspi__dma__driver.html#a8337d4647ffaf6ce288819538facf33c", null ],
      [ "isThereExtraByte", "group__dspi__dma__driver.html#a26cd470baf046f953e7726b7618f4f90", null ],
      [ "txData", "group__dspi__dma__driver.html#a125053695f06022166330add4b8dcbac", null ],
      [ "rxData", "group__dspi__dma__driver.html#a33cc537dc0837968f40fba159db99f59", null ],
      [ "remainingSendByteCount", "group__dspi__dma__driver.html#af369e487c2fa339dad2395dcb13ad24e", null ],
      [ "remainingReceiveByteCount", "group__dspi__dma__driver.html#a12996c582612fa3aa5b12e6fca89d732", null ],
      [ "totalByteCount", "group__dspi__dma__driver.html#a798acca1110770f693312ad70294b32b", null ],
      [ "rxBuffIfNull", "group__dspi__dma__driver.html#adc1fd8563c184843154f2cd844c63a8c", null ],
      [ "txBuffIfNull", "group__dspi__dma__driver.html#a5bdcd5cb8b1c0cdbe5e0208f5d0d796a", null ],
      [ "state", "group__dspi__dma__driver.html#a6882a67d6e566f9288b186607c0a30d1", null ],
      [ "callback", "group__dspi__dma__driver.html#aafe559d911f22a02dd981334212753b9", null ],
      [ "userData", "group__dspi__dma__driver.html#acba550ea61ae714ca4f60fb7e995c6f1", null ],
      [ "dmaRxRegToRxDataHandle", "group__dspi__dma__driver.html#a7abef921aec2f05397ecd44cf09590ca", null ],
      [ "dmaTxDataToIntermediaryHandle", "group__dspi__dma__driver.html#ae00976d778a6a02ff5f17b2ca7aad99c", null ],
      [ "dmaIntermediaryToTxRegHandle", "group__dspi__dma__driver.html#ac212f4d019dbb8650ce18a8b3e307399", null ]
    ] ],
    [ "dspi_slave_dma_handle_t", "group__dspi__dma__driver.html#struct__dspi__slave__dma__handle", [
      [ "bitsPerFrame", "group__dspi__dma__driver.html#a3a1fc05ba2c9a1cf9e4bc3857cd62ca3", null ],
      [ "isThereExtraByte", "group__dspi__dma__driver.html#ab93a1f5782f04b6ee9c6c92a65f8dbca", null ],
      [ "txData", "group__dspi__dma__driver.html#a4e0d0e55e2e60941a72e2fb3512be952", null ],
      [ "rxData", "group__dspi__dma__driver.html#a8eca6c02bbffd5cde2e419a7b0bf4ae5", null ],
      [ "remainingSendByteCount", "group__dspi__dma__driver.html#a83a97b9364ef3ff53194b0b0bb05349c", null ],
      [ "remainingReceiveByteCount", "group__dspi__dma__driver.html#a709f7c8f05f239a8951c657f815d6f56", null ],
      [ "totalByteCount", "group__dspi__dma__driver.html#a2cc6aca5be452888969e16d7a088dcdb", null ],
      [ "rxBuffIfNull", "group__dspi__dma__driver.html#a5ec8c16e22f9e33647647fb7277e0e3d", null ],
      [ "txBuffIfNull", "group__dspi__dma__driver.html#a44550ad68011ff757eeab94f2beeeb68", null ],
      [ "txLastData", "group__dspi__dma__driver.html#a97da574cc3614bfb7d961c0e93bee86d", null ],
      [ "state", "group__dspi__dma__driver.html#a0660bc4f9b1851afee0938cbaae28ea4", null ],
      [ "errorCount", "group__dspi__dma__driver.html#a8ef71306fb623fbb39e76bc2bb299853", null ],
      [ "callback", "group__dspi__dma__driver.html#aada7879b6133d3f5d2fe9725a65f8ca9", null ],
      [ "userData", "group__dspi__dma__driver.html#aca8dc4c83c37f19a4e28a1ca9cccfba9", null ],
      [ "dmaRxRegToRxDataHandle", "group__dspi__dma__driver.html#a9e07cc2a931cc632013b05b93e67c9c1", null ],
      [ "dmaTxDataToTxRegHandle", "group__dspi__dma__driver.html#a564ba36dcc41f2d7f730e1b36ef8b794", null ]
    ] ],
    [ "dspi_master_dma_transfer_callback_t", "group__dspi__dma__driver.html#ga3b540ad1f437a0bfa63cc37d574bda97", null ],
    [ "dspi_slave_dma_transfer_callback_t", "group__dspi__dma__driver.html#ga8db8b14faf884f8c789ee7b04153630c", null ],
    [ "DSPI_MasterTransferCreateHandleDMA", "group__dspi__dma__driver.html#ga3187e7ce20f68755e17f92e28d614ba1", null ],
    [ "DSPI_MasterTransferDMA", "group__dspi__dma__driver.html#ga5055018e5cedf1803c294de8780b4306", null ],
    [ "DSPI_MasterTransferAbortDMA", "group__dspi__dma__driver.html#gad1446115acb6912b36782385e7d9057b", null ],
    [ "DSPI_MasterTransferGetCountDMA", "group__dspi__dma__driver.html#ga6a15c16862a20309ec3abfd980df7de3", null ],
    [ "DSPI_SlaveTransferCreateHandleDMA", "group__dspi__dma__driver.html#ga722124db11ba03f608f025c66e7da024", null ],
    [ "DSPI_SlaveTransferDMA", "group__dspi__dma__driver.html#ga151538ae157287d0d87fde215c1c069c", null ],
    [ "DSPI_SlaveTransferAbortDMA", "group__dspi__dma__driver.html#ga74e93531592f813193de476da8f38ee7", null ],
    [ "DSPI_SlaveTransferGetCountDMA", "group__dspi__dma__driver.html#ga89314762a1346caa314f651b239e321d", null ]
];