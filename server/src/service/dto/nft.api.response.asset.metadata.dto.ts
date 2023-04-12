import {ApiProperty} from '@nestjs/swagger';

/**
 * An NFT API Response Asset Metadata DTO object.
 */
export class NftApiResponseAssetMetadataDTO {

  @ApiProperty({example: 'Image URL', description: 'NFT Image URL'})
  image?: string;

  @ApiProperty({
    example: 'CryptoNature Cards',
    description: 'Name of NFT Collection',
    required: false
  })
  name?: string;

  @ApiProperty({
    example: 'Description of NFT',
    description: 'Description of NFT',
    required: false
  })
  description?: string;

  @ApiProperty({
    example: '1211.5',
    description: 'Latest Price',
    required: false
  })
  latestPrice?: string;
}
