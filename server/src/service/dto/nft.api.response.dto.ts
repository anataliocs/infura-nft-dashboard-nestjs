import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString} from 'class-validator';
import {Exclude} from 'class-transformer';
import {NftApiResponseAssetDTO} from "./nft.api.response.asset.dto";

/**
 * An NFT API Response DTO object.
 */
export class NftApiResponseDTO {
  @ApiProperty({example: '2630', description: 'Total Results'})
  @IsString()
  total: string;

  @ApiProperty({example: '2630', description: 'Current Page'})
  @IsString()
  pageNumber: string;

  @ApiProperty({example: 'ETHEREUM', description: 'Blockchain network'})
  network?: string;

  @ApiProperty({example: 'ETHEREUM', description: 'Blockchain network'})
  assets?: NftApiResponseAssetDTO[];
}
