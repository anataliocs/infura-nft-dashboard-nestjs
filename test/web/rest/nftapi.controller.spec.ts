import { Test, TestingModule } from '@nestjs/testing';
import { NftapiController } from '../../../src/web/rest/nft.api.controller';

describe('Nftapi Controller', () => {
    let controller: NftapiController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [NftapiController],
        }).compile();

        controller = module.get<NftapiController>(NftapiController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
