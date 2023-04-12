import {ApiProperty} from '@nestjs/swagger';
import {NftApiResponseAssetMetadataDTO} from "./nft.api.response.asset.metadata.dto";

/**
 * An NFT API Response Asset DTO object.
 */
export class NftApiResponseAssetDTO {

  @ApiProperty({example: 'contract:', description: 'NFT Contract Address'})
  contract?: string;

  @ApiProperty({
    example: '106945795809454670040592717493434098019560983384410997565303845954775815290881',
    description: 'NFT Token Id'
  })
  tokenId?: string;

  @ApiProperty({
    example: 'ERC1155',
    description: 'NFT ERC Type'
  })
  type?: string;

  @ApiProperty({
    example: 'JSON value',
    description: 'NFT metadata'
  })
  metadata?: NftApiResponseAssetMetadataDTO;
}
