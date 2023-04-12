import { Controller, Get, Logger, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { ApiResponse, ApiOperation, ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('management')
@UseInterceptors(LoggingInterceptor)
export class ManagementController {
    logger = new Logger('ManagementController');

    @ApiExcludeEndpoint()
    @Get('/info')
    @ApiOperation({ description: 'Microservice Info' })
    @ApiResponse({
        status: 200,
        description: 'Check if the microservice is up',
        })
    info(): any {
        return {
            activeProfiles: 'dev',
            'display-ribbon-on-profiles': 'dev',
        };
    }
}
