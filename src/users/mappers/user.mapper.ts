import { User } from '../models/users.model';
import { ReturnUserDto } from '../dto/users.dto';

export class UserMapper {
  static fromDocToDto(doc: User): ReturnUserDto {
    if (!doc) return null;
    return { id: doc.id, name: doc.name };
  }
  static fromDocToDtoList(docs: User[]): ReturnUserDto[] {
    if (!docs || (docs.length && docs.every((d) => !d.id))) return null;
    return docs.map((doc) => this.fromDocToDto(doc));
  }
}
