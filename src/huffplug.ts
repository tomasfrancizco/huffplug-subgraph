import {
  Transfer as TransferEvent
} from "../generated/Huffplug/Huffplug"
import {
  Buttplug
} from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Buttplug(
    "btplg-" + event.params.tokenId.toString()
  )
  entity.prevOwner = event.params.from
  entity.owner = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
