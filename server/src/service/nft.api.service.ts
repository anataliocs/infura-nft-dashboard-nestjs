import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { config as loadEnv } from 'dotenv';
import axios, {AxiosResponse} from 'axios';
import {NftApiResponseAssetDTO} from "./dto/nft.api.response.asset.dto";
import {response} from "express";
import {NftApiResponseDTO} from "./dto/nft.api.response.dto";

@Injectable()
export class NftApiService {
    logger = new Logger('NftApiService');
    private baseURL = "https://nft.api.infura.io/";

  private config = {
    headers:{
      Authorization: "Basic"
    }
  };

    constructor() {
    }

    async getNftsOwnedByWallet(network :string, walletAddress: string): Promise<NftApiResponseDTO> {

        return await axios
          .get(this.baseURL + `networks/${network}/accounts/${walletAddress}/assets/nfts`, this.config)
          .then(response => response.data);

    }
}
