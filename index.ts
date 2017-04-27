// angular
import { NgModule } from '@angular/core';

// module
import { ServerStateTransferService } from './src/server-state-transfer.service';
import { HttpTransferService } from './src/http-transfer.service';
import { StateTransferService } from './src/state-transfer.service';

export * from './src/server-state-transfer.service';
export * from './src/state-transfer.service';
export * from './src/http-transfer.service';

// for AoT compilation
export function getTransferState(): StateTransferService {
  const transferState = new StateTransferService();
  transferState.initialize(window['TRANSFER_STATE'] || {});

  return transferState;
}

@NgModule({
  providers: [
    {
      provide: StateTransferService,
      useFactory: (getTransferState)
    }
  ]
})
export class BrowserStateTransferModule {
}

@NgModule({
  providers: [
    {
      provide: StateTransferService,
      useClass: ServerStateTransferService
    }
  ]
})
export class ServerStateTransferModule {
}

@NgModule({
  providers: [
    HttpTransferService
  ]
})
export class HttpTransferModule {
}
