import {
  MemberMapFunction,
  MemberMapFunctionId,
  TransformationType,
} from '../types';

// TODO(chau): use Variadic Tuple Type when upgrade to TypeScript 4.1
export function isThisMemberMap<TMemberMap extends MemberMapFunction>(
  mapFn: ReturnType<MemberMapFunction>,
  type: TransformationType
): mapFn is ReturnType<TMemberMap>;
export function isThisMemberMap<
  TMemberMapA extends MemberMapFunction,
  TMemberMapB extends MemberMapFunction
>(
  mapFn: ReturnType<MemberMapFunction>,
  typeA: TransformationType,
  typeB: TransformationType
): mapFn is ReturnType<TMemberMapA | TMemberMapB>;
export function isThisMemberMap<
  TMemberMapA extends MemberMapFunction,
  TMemberMapB extends MemberMapFunction,
  TMemberMapC extends MemberMapFunction
>(
  mapFn: ReturnType<MemberMapFunction>,
  typeA: TransformationType,
  typeB: TransformationType,
  typeC: TransformationType
): mapFn is ReturnType<TMemberMapA | TMemberMapB | TMemberMapC>;
export function isThisMemberMap(
  mapFn: ReturnType<MemberMapFunction>,
  ...types: TransformationType[]
) {
  return types.some(type => mapFn[MemberMapFunctionId.type] === type);
}
