import {Injectable, Logger} from '@nestjs/common';
import axios from 'axios';
import {NftApiResponseDTO} from "./dto/nft.api.response.dto";
import {deserialize} from "class-transformer";

@Injectable()
export class NftApiService {
  logger = new Logger('NftApiService');
  private baseURL = 'https://nft.api.infura.io/';

  private config = {
    auth: {
      username: process.env.INFURA_API_KEY,
      password: process.env.INFURA_API_KEY_SECRET
    },
    baseURL: this.baseURL
  };

  constructor() {
  }

  async getNftsOwnedByWallet(network: string, walletAddress: string): Promise<NftApiResponseDTO> {

    return await axios
      .get(`networks/${network}/accounts/${walletAddress}/assets/nfts`, this.config)
      .then(response => response.data);
  }
}
