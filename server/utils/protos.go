package utils

import (
	"github.com/golang/protobuf/ptypes/timestamp"
	"time"
)

func ToTimestamp(t time.Time) *timestamp.Timestamp {
	return &timestamp.Timestamp{
		Seconds: t.Unix(),
		Nanos:   int32(t.UnixNano()),
	}
}
