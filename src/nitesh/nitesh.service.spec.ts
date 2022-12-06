import { Test, TestingModule } from '@nestjs/testing';
import { NiteshService } from './nitesh.service';

describe('NiteshService', () => {
  let service: NiteshService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NiteshService],
    }).compile();

    service = module.get<NiteshService>(NiteshService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
