/* eslint-disable @typescript-eslint/no-unused-vars */
import {ClassSerializerInterceptor, Controller, Get, Logger, Param, UseInterceptors,} from '@nestjs/common';
import {LoggingInterceptor} from '../../client/interceptors/logging.interceptor';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';
import {NftApiService} from "../../service/nft.api.service";
import {NftApiResponseAssetDTO} from "../../service/dto/nft.api.response.asset.dto";


@Controller('api/v1')
@UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
export class NftApiController {
  logger = new Logger('NftApiController');

  constructor(private nftApiService: NftApiService) {
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/infura/nft/:networkid/:walletAddress')
  @ApiOperation({description: 'Get Nft by wallet'})
  @ApiResponse({
    status: 200,
    description: 'Registered user',
    type: NftApiResponseAssetDTO
  })
  async getNftsByWallet(@Param('networkid') networkid: string,
                        @Param('walletAddress') walletAddress: string): Promise<NftApiResponseAssetDTO[]> {
    return await this.nftApiService.getNftsOwnedByWallet(networkid, walletAddress)
      .then(response => response.assets
        .filter(asset => asset.metadata != null && asset.metadata != undefined)
        .filter(asset => asset.type === 'ERC721')
      );
  }
}
