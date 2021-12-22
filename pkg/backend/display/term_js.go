//go:build js
// +build js

package display

import (
	"io"
	"os"
	"syscall/js"
)

var jsTerminal = js.Global().Get("terminal")

func EnableANSITerminal() (stdout io.Writer, err error) {
	defer func() {
		if x := recover(); x != nil {
			e, ok := x.(error)
			if !ok {
				panic(x)
			}
			err = e
		}
	}()

	jsTerminal.Call("enableAnsiTerminal")
	return os.Stdout, nil
}